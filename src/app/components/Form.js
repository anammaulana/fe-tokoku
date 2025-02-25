import FormInput from "./FormInput";
import Button from "./Button";

const Form = ({ title, fields, onSubmit, buttonText, link }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          {fields.map((field, index) => (
            <FormInput key={index} {...field} />
          ))}
          <Button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            {buttonText}
          </Button>
          {link && (
            <a href={link.href} className="text-blue-500 text-sm text-center block mt-2">
              {link.text}
            </a>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
