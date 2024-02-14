import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

// Class-variance-authority allow us to define style for every button here its called "transition-colors". We will be able to add variable style in our case its "variant" + "size"
export const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
      dark: [
        "bg-secondary-dark",
        "hover:bg-secondary-dark-hover",
        "text-secondary",
      ],
    },
    size: {
      default: [" rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = ({ variant, size, className, ...props }) => {
  return (
    <button
      //   twMerge allow us to use prestyled class + normal classname. Depends on the order we can choose wich one overide the other one
      // !!!! THE ORDER IS IMPORTANT !!!!
      className={twMerge(buttonStyles({ variant, size }), className)}
      // in this scenario we want our custom classname to overide the button style so we write "twMerge(buttonStyles({ variant, size })" first then we put className"

      // we could choose to do the reverse but we would have to write className={className, twMerge(buttonStyles({ variant, size }) }
      {...props}
    />
  );
};

export default Button;
