import { PropsWithChildren } from 'react';
import { ErrorText } from './FormError.elements';

export const FormError = ({ children }: PropsWithChildren<{}>) => <ErrorText>{children}</ErrorText>;
