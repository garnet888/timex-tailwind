'use client';

import { useMemo } from 'react';
import moment from 'moment';
import { Popover } from '@/ui';
import { dataType, dateFormats } from '@/lib/constants';
import { Bin, Settings } from '@/utils/icons';

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
                    <Popover
                      key={action.key}
                      placement='LEFT'
                      content={
                        <button
                          className='text_btn click_effect p-[2px] hover:bg-sky-400'
                          onClick={
                            actionsHandler
                              ? () => actionsHandler(action.key, row.original)
                              : null
                          }
                        >
                          <Settings />
                        </button>
                      }
                    >
                      <p className='text-sm text-nowrap'>Засах</p>
                    </Popover>
                  );
                case 'DELETE':
                  return (
                    <Popover
                      key={action.key}
                      placement='LEFT'
                      content={
                        <button
                          className='text_btn click_effect p-[2px] hover:bg-red-500'
                          onClick={
                            actionsHandler
                              ? () => actionsHandler(action.key, row.original)
                              : null
                          }
                        >
                          <Bin />
                        </button>
                      }
                    >
                      <p className='bg-red-500 text-white text-sm text-nowrap px-2 py-1 -mx-2 -my-1'>
                        Устгах
                      </p>
                    </Popover>
                  );

                default:
                  return (
                    <Popover
                      key={action.key}
                      placement='LEFT'
                      content={
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
                      }
                    >
                      <p className='text-sm text-nowrap'>{action.label}</p>
                    </Popover>
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
