import React from 'react';
import { renderElement } from '../../utils/render';

export interface CardProps {
  title: string | (() => React.ReactElement);
  content: string | (() => React.ReactElement);
}

export default function Card({ title, content }: CardProps) {
  return (
    <div className="card">
      <h2 className="text-base">{renderElement(title)}</h2>
      <p className="text-sub text-sm">{renderElement(content)}</p>
    </div>
  );
}
