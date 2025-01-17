import type * as React from 'react';
import { SelectProps } from './Select';
import { default as InternalSelect } from './Select';
type CompoundedComponent = React.ForwardRefExoticComponent<
  SelectProps & React.RefAttributes<HTMLInputElement>
> & {};

const Select = InternalSelect as CompoundedComponent;

export default Select;
