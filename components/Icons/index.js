import React from 'react';
import t from 'prop-types';

const icons = {
  IcAdd: {
    className: 'Icon--IcAdd',
    viewBox: '0 0 100 100',
    path: (
      <g>
        <path d="M80.148 41.482h-21.63V19.851c0-4.704-3.813-8.518-8.518-8.518s-8.518 3.813-8.518 8.518v21.632h-21.63c-4.704 0-8.518 3.813-8.518 8.518s3.813 8.518 8.518 8.518h21.631v21.632c0 4.704 3.813 8.518 8.518 8.518s8.518-3.813 8.518-8.518V58.518H80.15a8.518 8.518 0 1 0-.002-17.036z" />
      </g>
    )
  }, 
  IcChevronLeft: {
    className: 'Icon--IcChevronLeft',
    viewBox: '0 0 100 100',
    path: (
      <g>
        <path d="M74.363 79.637a8.997 8.997 0 0 1 0 12.727C72.605 94.121 70.303 95 68 95s-4.605-.879-6.363-2.637l-36-36a8.997 8.997 0 0 1 0-12.727l36-36a8.997 8.997 0 0 1 12.727 0 8.997 8.997 0 0 1 0 12.727L44.727 50l29.636 29.637z" />
      </g>
    )
  }, 
  IcChevronRightTiny: {
    className: 'Icon--IcChevronRightTiny',
    viewBox: '0 0 100 100',
    path: (
      <g>
        <path d="M27.813 10.982a2 2 0 0 0-1.094 3.562l42.187 35.469L26.72 85.482a2 2 0 1 0 2.562 3.062l44-37a2 2 0 0 0 0-3.062l-44-37a2 2 0 0 0-1.468-.5z" />
      </g>
    )
  }, 
  IcChevronRight: {
    className: 'Icon--IcChevronRight',
    viewBox: '0 0 100 100',
    path: (
      <g>
        <path d="M74.363 56.363l-36 36C36.605 94.121 34.303 95 32 95s-4.605-.879-6.363-2.637a8.997 8.997 0 0 1 0-12.727L55.273 50 25.637 20.363a8.997 8.997 0 0 1 0-12.727 8.997 8.997 0 0 1 12.727 0l36 36c3.515 3.513 3.515 9.215-.001 12.727z" />
      </g>
    )
  }, 
  IcClose: {
    className: 'Icon--IcClose',
    viewBox: '0 0 100 100',
    path: (
      <g>
        <path d="M75.8 10.8L50 36.6 24.2 10.8c-2-2-5.1-2-7.1 0l-5.7 5.7c-2 2-2 5.1 0 7.1l25.8 25.8-25.7 25.7c-2 2-2 5.1 0 7.1l5.7 5.7c2 2 5.1 2 7.1 0L50 62l25.8 25.8c2 2 5.1 2 7.1 0l5.7-5.7c2-2 2-5.1 0-7.1L62.7 49.3l25.8-25.8c2-2 2-5.1 0-7.1l-5.7-5.7c-1.9-1.9-5.1-1.9-7 .1z" />
      </g>
    )
  }, 
  IcDocuments: {
    className: 'Icon--IcDocuments',
    viewBox: '0 0 100 100',
    path: (
      <g>
        <path d="M49.998 87.513c-.293 0-.585-.064-.856-.192L7.771 67.724a2 2 0 0 1 1.713-3.615L49.998 83.3l40.519-19.191a2.001 2.001 0 0 1 1.713 3.615L50.854 87.32a2.003 2.003 0 0 1-.856.193zm0-16.729c-.293 0-.585-.064-.856-.192L7.771 50.998a2 2 0 0 1 1.713-3.615l40.515 19.188 40.519-19.188a2 2 0 0 1 1.713 3.615L50.854 70.592a2.002 2.002 0 0 1-.856.192zm0-17.076c-.287 0-.574-.062-.841-.186L9.015 34.912a1.998 1.998 0 0 1 0-3.628l40.143-18.61a1.994 1.994 0 0 1 1.682 0l40.146 18.61a1.998 1.998 0 0 1 0 3.628L50.84 53.522a2.003 2.003 0 0 1-.842.186zM14.61 33.098l35.388 16.406 35.391-16.406-35.391-16.407L14.61 33.098z" />
      </g>
    )
  }, 
  IcMenu: {
    className: 'Icon--IcMenu',
    viewBox: '0 0 100 100',
    path: (
      <g>
        <path d="M5 21.875a8.437 8.437 0 0 1 8.438-8.438h73.125c4.661 0 8.438 3.777 8.438 8.438s-3.777 8.438-8.438 8.438H13.438A8.438 8.438 0 0 1 5 21.875zm81.562 19.687H13.438C8.777 41.562 5 45.339 5 50s3.777 8.438 8.438 8.438h73.125C91.223 58.438 95 54.661 95 50s-3.777-8.438-8.438-8.438zm0 28.126H13.438C8.777 69.688 5 73.464 5 78.125s3.777 8.438 8.438 8.438h73.125c4.661 0 8.438-3.777 8.438-8.438s-3.778-8.437-8.439-8.437z" />
      </g>
    )
  }, 
  IcSearch: {
    className: 'Icon--IcSearch',
    viewBox: '0 0 100 100',
    path: (
      <g>
        <path d="M93.352 85.398L75.878 67.924c11.553-15.422 10.362-37.368-3.661-51.391C64.529 8.844 54.452 5 44.375 5S24.221 8.844 16.533 16.533c-15.377 15.377-15.377 40.308 0 55.685 7.688 7.688 17.766 11.533 27.842 11.533 8.302 0 16.582-2.653 23.549-7.872l17.474 17.474A5.61 5.61 0 0 0 89.375 95a5.623 5.623 0 0 0 3.977-9.602zM24.488 64.262c-5.313-5.312-8.238-12.375-8.238-19.887s2.925-14.575 8.238-19.887c5.312-5.312 12.375-8.238 19.887-8.238s14.575 2.925 19.887 8.238C69.575 29.8 72.5 36.863 72.5 44.375s-2.925 14.575-8.238 19.888C58.95 69.575 51.888 72.5 44.375 72.5S29.8 69.575 24.488 64.262z" />
      </g>
    )
  }, 
  IcTick: {
    className: 'Icon--IcTick',
    viewBox: '0 0 100 100',
    path: (
      <g>
        <path d="M38 82.376c-3.07 0-6.146-1.169-8.484-3.51L7.637 56.987a8.997 8.997 0 0 1 0-12.727 8.997 8.997 0 0 1 12.727 0L38 61.897 79.637 20.26a8.997 8.997 0 0 1 12.727 0 8.997 8.997 0 0 1 0 12.727l-45.88 45.879A11.957 11.957 0 0 1 38 82.376z" />
      </g>
    )
  }
};

const Icon = ({ name, size, className, style, ...props }) => {
  const ChosenIcon = icons[name];

  if (!ChosenIcon) {
    throw new Error(`Cannot find icon '${name}'`);
  }

  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox={ChosenIcon.viewBox}
      style={{ ...style, width: size, height: size }}
      className={`${className ? className + ' ' : ''}Icon ${ChosenIcon.className}`}>
      {ChosenIcon.path}
    </svg>
  );
};

Icon.propTypes = {
  name: t.string,
  className: t.string,
  size: t.number,
  style: t.object
};

Icon.defaultProps = {
  size: 25
};

export default Icon;

export const IcAdd = (props) => <Icon {...props} name="IcAdd" />;
export const IcChevronLeft = (props) => <Icon {...props} name="IcChevronLeft" />;
export const IcChevronRightTiny = (props) => <Icon {...props} name="IcChevronRightTiny" />;
export const IcChevronRight = (props) => <Icon {...props} name="IcChevronRight" />;
export const IcClose = (props) => <Icon {...props} name="IcClose" />;
export const IcDocuments = (props) => <Icon {...props} name="IcDocuments" />;
export const IcMenu = (props) => <Icon {...props} name="IcMenu" />;
export const IcSearch = (props) => <Icon {...props} name="IcSearch" />;
export const IcTick = (props) => <Icon {...props} name="IcTick" />;

