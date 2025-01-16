export interface ErrorMessageProps {
  status: number;
  message: string;
}

const ErrorMessage = ({ status, message }: ErrorMessageProps) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Ошибка {status}!</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default ErrorMessage;
