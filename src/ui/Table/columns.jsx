'use client';

import { useMemo } from 'react';
import moment from 'moment';
import { Tooltip } from '@/ui';
import { dataType, dateFormats } from '@/lib/constants';
import { BinIcon, SettingsIcon } from '@/utils/icons';

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
          cell: ({ getValue }) => (
            <center>{moment(getValue()).format(dateFormats.WITH_TIME)}</center>
          ),
        };
      } else {
        return col;
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

    rowOnClick && edited.pop();

    return edited;
  }, [columns, actionHeader, actions, actionsHandler, rowOnClick]);
