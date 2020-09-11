/* eslint-disable */
import React, { useReducer, useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import { SCROLL_CARD, BLACK_CARD, SECONDARY_CARD } from './classNames';
import ClosePaneButton from './ClosePaneButton';
import HelpButton from './HelpButton';
import { PopperMenu } from './shared-mui/components';

function DownloadIcon({ open, theme }) {
  const color = theme === 'dark' ? '#D3D3D3' : '#333333';
  return (
    <span className="title-info-button">
      {open ? <ArrowDropUpIcon style={{ color }} viewBox="4 4 16 16" /> : <ArrowDropDownIcon style={{ color }} viewBox="4 4 16 16" />}
    </span>
  );
}

function DownloadOptions(props) {
  const [open, toggle] = useReducer(v => !v, false);
  const { urls, theme } = props;
  return (
    <PopperMenu
      open={open}
      toggle={toggle}
      buttonIcon={<DownloadIcon open={open} theme={theme} />}
      buttonStyles={{
        paddingBottom: 0,
        paddingTop: 0,
        marginLeft: '8px',
        backgroundColor: 'transparent',
        outline: 0,
      }}
    >
      {urls.map(({ url, name }) => (
        <MenuItem dense key={url}>
          <Link underline="none" href={url} target="_blank" rel="noopener">
            {name}
          </Link>
        </MenuItem>
      ))}
    </PopperMenu>
  );
}

export default function TitleInfo(props) {
  const {
    title, info, children, isScroll, isSpatial, removeGridComponent, urls, theme,
    helpComponent,
  } = props;
  // eslint-disable-next-line no-nested-ternary
  const childClassName = isScroll ? SCROLL_CARD : (isSpatial ? BLACK_CARD : SECONDARY_CARD);
  const [showHelpInfo, setShowHelpInfo] = useState(false);

  return (
    // d-flex without wrapping div is not always full height; I don't understand the root cause.
    <>
      <div className="title d-flex justify-content-between align-items-baseline">
        <div className="justify-content-between d-flex align-items-end">
          <span>{title}</span>
        </div>
        <span className="details pl-2 align-items-end">
          <span className="d-flex justify-content-between">
            {info}
            {urls && urls.length > 0 ? (
              <DownloadOptions urls={urls} theme={theme} />
            ) : null}
            <HelpButton setShowHelpInfo={setShowHelpInfo} />
            <ClosePaneButton removeGridComponent={removeGridComponent} />
          </span>
        </span>
      </div>
      <div className={childClassName}>{children}</div>
    </>
    // "pl-2" only matters when the window is very narrow.
  );
}
