'use client';

import { useMemo } from 'react';
import moment from 'moment';
import { Tooltip } from '@/ui';
import { dataType, dateFormats } from '@/lib/constants';
import { BinIcon, SettingsIcon } from '@/utils/icons';

const getStatus = (value) => {
  let bgColor = '';

  switch (value) {
    case 'Ирсэн':
      bgColor = '#87d068'; // green
      break;

    case 'Идэвхтэй':
      bgColor = '#1e90ff'; // blue
      break;

    case 'Хугацаа дууссан':
    case 'Цуцлагдсан':
    case 'Ирээгүй':
      bgColor = '#ff5252'; // red
      break;

    case 'Төлбөр хүлээгдэж буй':
      bgColor = '#ffa500'; // orange
      break;

    default:
      break;
  }

  return (
    <span className={bgColor ? 'flex justify-center' : ''}>
      <p
        className='w-fit text-sm rounded-full px-2'
        style={{
          backgroundColor: bgColor,
          color: bgColor ? 'white' : 'black',
        }}
      >
        {value}
      </p>
    </span>
  );
};

export const GetColumns = ({
  columns,
  actionHeader,
  actions,
  noActions,
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
          cell: ({ getValue }) => getStatus(getValue()),
        };
      } else {
        return {
          shownSort: true,
          ...col,
        };
      }
    });

    let edited = [
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
          <div className='flex justify-center items-center gap-1 text-[20px]'>
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
                        className='text_btn click_effect p-[3px] hover:bg-gray-200 hover:text-dark'
                        onClick={
                          actionsHandler
                            ? () => actionsHandler(action.key, row.original)
                            : null
                        }
                      >
                        <span className='p-[3px]'>{action.icon}</span>
                      </button>
                    </Tooltip>
                  );
              }
            })}
          </div>
        ),
      },
    ];

    if (!actions.length > 0 || noActions) {
      edited = edited.filter((item) => item.accessorKey !== 'action');
    }

    return edited;
  }, [columns, actionHeader, actions, actionsHandler, rowOnClick]);
