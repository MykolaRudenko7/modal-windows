import React from 'react';
import ReactDOM from 'react-dom';
//
//
//
//
//
//
//
//	дозволяє рендерить дочірні елементи в ДОМ вузол, який знаходиться поза ДОМ ієрархією батьківського документу

export const Portal = ({ children }) => {
  //	1. в стейт зберігаю дів у стейті
  const [container] = React.useState(() => document.createElement('div'));

  //	3. дів з контентом поміщаю всеридуну боді
  React.useEffect(() => {

	// ! якщо встав декілька дівів з однаковим з-індексом, останній дів завжди буде поверх інших
    document.body.appendChild(container);

	//  4. при розмонтуванні видаляю
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  //	2. кладу чілдрен всередину створ перед цим діву
  return ReactDOM.createPortal(children, container);
};
