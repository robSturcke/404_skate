import React from 'react';
import { useToggle } from '../context/toolbar_context';
import { useCart } from 'react-use-cart';
import EmptyIcon from './empty_icon';
import FilledIcon from './filled_icon';
import styles from '../styles/Nav.module.scss';

export default function ToolbarSwitch() {
  const [on, setOn] = useToggle(false);
  const { totalItems } = useCart();
  const toggle = () => setOn((e) => !e);
  return (
    <span style={{ cursor: 'pointer' }} onClick={toggle}>
      <span>{totalItems} </span>
      {on ? (
        <EmptyIcon baseLayer="nav_icon" />
      ) : (
        <FilledIcon baseLayer="nav_icon" />
      )}
    </span>
  );
}
