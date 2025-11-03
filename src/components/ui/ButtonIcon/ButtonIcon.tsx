import styles from '@/components/ui/ButtonIcon/styles.module.scss';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const ButtonIcon = ({ children, onClick, className }: Props) => {
  return (
    <button className={`${styles.menuButton} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonIcon;
