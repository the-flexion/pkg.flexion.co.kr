'use client';
import dynamic from 'next/dynamic';

import Input from './react/atom/input';
import Textarea from './react/atom/textarea';
const Editor = dynamic(() => import('./react/atom/editor'), { ssr: false });

const Form = {
  Input,
  Textarea,
  Editor,
};

export default Form;

export { Input, Textarea, Editor };
