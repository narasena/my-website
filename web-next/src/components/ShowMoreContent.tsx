import * as React from 'react';

export interface IShowMoreContentProps {
  text?: string
  onClick?: () => void
}

export default function ShowMoreContent(props: IShowMoreContentProps) {
  return (
    <div>
      <p className='absolute bottom-0 right-0 cursor-pointer text-blue-600 hover:text-blue-700'
        onClick={props.onClick}>{props.text ?? "more"}</p>
    </div>
  );
}
