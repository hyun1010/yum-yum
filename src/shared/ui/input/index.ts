import type * as React from 'react';
import { InputProps } from './Input';
import { default as InternalInput } from './Input';

type CompoundedComponent = React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement>
> & {};

const Input = InternalInput as CompoundedComponent;

export default Input;
