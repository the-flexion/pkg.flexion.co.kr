'use client';
import dynamic from 'next/dynamic';

import Input from './react/atom/input';
import Textarea from './react/atom/textarea';
import Validator from './react/atom/validator';
import Field from './react/molecule/field';
const Editor = dynamic(() => import('./react/atom/editor'), { ssr: false });
import EditorView from './react/atom/editor-view';

const Form = {
  Input,
  Textarea,
  Validator,
  Editor,
  EditorView,
  Field,
};

export default Form;

export { Input, Textarea, Validator, Editor, EditorView, Field };
