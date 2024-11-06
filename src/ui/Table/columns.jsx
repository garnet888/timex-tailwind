'use client';

import { useMemo } from 'react';
import moment from 'moment';
import { Tooltip } from '@/ui';
import { dataType, dateFormats } from '@/lib/constants';
import { BinIcon, SettingsIcon } from '@/utils/icons';

const getStatus = (value) => {
  let color = '';

  switch (value) {
    case 'Ирсэн':
      color = '#87d068';
      break;

    case 'Идэвхтэй':
      color = '#1e90ff';
      break;

    case 'Хугацаа дууссан':
    case 'Цуцлагдсан':
    case 'Ирээгүй':
      color = '#ff5252';
      break;

    case 'Төлбөр хүлээгдэж буй':
      color = '#ffa500';
      break;

    default:
      break;
  }

  return (
    <p
      className='w-fit text-white text-sm rounded-full px-2'
      style={{ backgroundColor: color }}
    >
      {value}
    </p>
  );
};

export const GetColumns = ({
  columns,
  actionHeader,
  actions,
  actionsHandler,
  rowOnClick,
}) =>
  useMemo(() => {
    const _columns = columns.map((col) => {
      if (col?.filterType === dataType.DATETIME) {
        return {
          ...col,
          shownSort: true,
          cell: ({ getValue }) =>
            getValue() && (
              <center>
                {moment(getValue()).format(dateFormats.WITH_TIME)}
              </center>
            ),
        };
      } else if (String(col.accessorKey).includes('status')) {
        return {
          shownSort: true,
          ...col,
          cell: ({ getValue }) => <center>{getStatus(getValue())}</center>,
        };
      } else {
        return {
          shownSort: true,
          ...col,
        };
      }
    });

    const edited = [
      {
        accessorKey: 'number',
        header: '№',
        enableColumnFilter: false,
      },
      ..._columns,
      {
        accessorKey: 'action',
        header: actionHeader,
        enableColumnFilter: false,
        cell: ({ row }) => (
          <div className='flex justify-center gap-1 text-[20px]'>
            {actions.map((action) => {
              switch (action.key) {
                case 'EDIT':
                  return (
                    <Tooltip
                      key={action.key}
                      placement='top'
                      content={<p className='text-sm text-nowrap'>Засах</p>}
                    >
                      <button
                        className='text_btn click_effect p-[2px] hover:bg-sky-400'
                        onClick={
                          actionsHandler
                            ? () => actionsHandler(action.key, row.original)
                            : null
                        }
                      >
                        <SettingsIcon />
                      </button>
                    </Tooltip>
                  );
                case 'DELETE':
                  return (
                    <Tooltip
                      key={action.key}
                      placement='top'
                      content={<p className='text-sm text-nowrap'>Устгах</p>}
                    >
                      <button
                        className='text_btn click_effect p-[2px] hover:bg-red-500'
                        onClick={
                          actionsHandler
                            ? () => actionsHandler(action.key, row.original)
                            : null
                        }
                      >
                        <BinIcon />
                      </button>
                    </Tooltip>
                  );

                default:
                  return (
                    <Tooltip
                      key={action.key}
                      placement='top'
                      content={
                        <p className='text-sm text-nowrap'>{action.label}</p>
                      }
                    >
                      <button
                        className='text_btn click_effect'
                        onClick={
                          actionsHandler
                            ? () => actionsHandler(action.key, row.original)
                            : null
                        }
                      >
                        {action.icon}
                      </button>
                    </Tooltip>
                  );
              }
            })}
          </div>
        ),
      },
    ];

    actions?.length > 0 || edited.pop();
    rowOnClick && edited.pop();

    return edited;
  }, [columns, actionHeader, actions, actionsHandler, rowOnClick]);
