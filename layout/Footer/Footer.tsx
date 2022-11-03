import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return (
    <div {...props}>
      <div>OwlTop © 2020 - 2021 Все права защищены</div>
      <div>Пользовательское соглашение</div>
      <div>Политика конфиденциальности</div>
    </div>
  );
};