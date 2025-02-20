import React from 'react';

/**
 * 문자열 또는 React 요소 반환 함수를 렌더링하는 유틸 함수
 * @param value 문자열 또는 React 요소를 반환하는 함수
 * @returns React.ReactNode
 */
export function renderElement(
  value: string | (() => React.ReactElement)
): React.ReactNode {
  return typeof value === 'string' ? value : value();
}
