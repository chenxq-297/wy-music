import React, {memo} from 'react';
import type {ReactNode} from 'react';
import {Link} from 'react-router-dom';

interface IProps {
  children?: ReactNode;
}

const WyHeader: React.FC<IProps> = () => {
  return (
    <>
      <Link to={'/discover'}>发现音乐</Link>
      <Link to={'/mine'}>我的音乐</Link>
      <Link to={'/focus'}>关注</Link>
      <Link to={'/download'}>下载客户端</Link>
    </>
  );
};

export default memo(WyHeader);
