import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IIcon} from '../../types/icon';

const SvgDelete = (props: IIcon) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}>
    <Path
      fill={props.color}
      d="M7 21c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 19V6a.968.968 0 0 1-.713-.287A.968.968 0 0 1 4 5c0-.283.096-.52.287-.713A.968.968 0 0 1 5 4h4c0-.283.096-.52.287-.712A.968.968 0 0 1 10 3h4c.283 0 .52.096.713.288.191.191.287.429.287.712h4c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.713A.968.968 0 0 1 19 6v13c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 21H7ZM7 6v13h10V6H7Zm2 10c0 .283.096.52.287.712.192.192.43.288.713.288s.52-.096.713-.288A.968.968 0 0 0 11 16V9a.967.967 0 0 0-.287-.713A.968.968 0 0 0 10 8a.968.968 0 0 0-.713.287A.968.968 0 0 0 9 9v7Zm4 0c0 .283.096.52.287.712.192.192.43.288.713.288s.52-.096.713-.288A.968.968 0 0 0 15 16V9a.967.967 0 0 0-.287-.713A.968.968 0 0 0 14 8a.968.968 0 0 0-.713.287A.967.967 0 0 0 13 9v7Z"
    />
  </Svg>
);
export default SvgDelete;
