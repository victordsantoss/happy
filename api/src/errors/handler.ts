import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  let errors_res = error.errors;

  console.error(error)
  return response.status(500).json({ message: 'Internal server error.', errors_res});
};

export default errorHandler;