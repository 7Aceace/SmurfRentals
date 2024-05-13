import { Libre_Franklin } from 'next/font/google'
import './stylesview.css'
import React from 'react';

const layoutview = () => {
    const libre_franklin = Libre_Franklin({
        subsets: ['latin'],
        display: 'swap',
        variable: '--font-libre_franklin',
      })
 return (
    <html lang="en">
    <body className={libre_franklin.variable}>
      {children}
    </body>
    </html>
    );
};

export default layoutview;