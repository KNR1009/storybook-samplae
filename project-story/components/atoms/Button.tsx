interface Props {
  purpose?: string;
}

export const Button: React.FC<Props> = ({ purpose = "primary", children }) => {
  return (
    <button className={`button ${purpose}`}>
      {children}
      <style jsx>{`
        .button {
          width: 100px;
          padding: 4px 8px;
          border: none;
          border-radius: 4px;
          font-size: 16px;
        }

        .primary {
          background-color: #007bff;
          color: #fff;
        }

        .danger {
          background-color: #dc3545;
          color: #fff;
        }
      `}</style>
    </button>
  );
};
