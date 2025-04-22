import { useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import * as React from 'react';

export type IMenu = {
  id: number;
  title: string;
  url: string;
  dropdown?: boolean;
  items?: IMenu[];
};

type MenuProps = {
  list: IMenu[];
};

const Menu = ({ list }: MenuProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <MotionConfig transition={{ bounce: 0, type: 'tween' }}>
      <nav className="relative">
        <ul className="flex items-center justify-center space-x-2">
          {list?.map((item) => {
            return (
              <li key={item.id} className="relative">
                <a
                  className={`
                    relative flex items-center justify-center rounded px-4 py-2 transition-all text-text
                    md:text-[9px] lg:text-base hover:text-primary
                    ${hovered === item?.id ? 'text-primary' : ''}
                  `}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  href={item?.url}
                >
                  {item?.title}
                </a>
                {hovered === item?.id && !item?.dropdown && (
                  <motion.div
                    layout
                    layoutId={`cursor`}
                    className="absolute h-0.5 w-full bg-primary"
                  />
                )}
                {item?.dropdown && hovered === item?.id && (
                  <div
                    className="absolute left-0 top-full"
                    onMouseEnter={() => setHovered(item.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <motion.div
                      layout
                      transition={{ bounce: 0 }}
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                      exit={{ y: 10 }}
                      style={{
                        borderRadius: '8px',
                      }}
                      className="mt-4 flex w-64 flex-col rounded bg-white border border-gray-100 shadow-lg"
                      layoutId="cursor"
                    >
                      {item?.items?.map((nav) => {
                        return (
                          <motion.a
                            key={`link-${nav?.id}`}
                            href={`${nav?.url}`}
                            className="w-full p-4 hover:bg-gray-50 transition-colors text-text hover:text-primary md:text-sm lg:text-base"
                          >
                            {nav?.title}
                          </motion.a>
                        );
                      })}
                    </motion.div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </MotionConfig>
  );
};

export default Menu;
