import { useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import suneditor from 'suneditor';
import 'suneditor/dist/css/suneditor.min.css';
import styles from './editor.module.scss';
import lang from 'suneditor/src/lang';
import {
  blockquote,
  align,
  font,
  fontSize,
  fontColor,
  hiliteColor,
  horizontalRule,
  list,
  formatBlock,
  lineHeight,
  template,
  paragraphStyle,
  textStyle,
  link,
  image,
  video,
  table,
} from 'suneditor/src/plugins';

const SunEditor = ({
  value = '',
  width = '100%',
  height = '600px',
  onChange,
  imageUploadUrl,
}: {
  value: string;
  width?: string;
  height?: string;
  onChange: (content: string) => void;
  imageUploadUrl?: string;
}) => {
  const editorID = `f${uuid()}`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>();

  useEffect(() => {
    const toolbar = [
      ['undo', 'redo'],
      ['formatBlock', 'bold', 'underline', 'italic', 'strike'],
      ['fontColor', 'hiliteColor'],
      ['align', 'list', 'table'],
      ['link', 'image', 'video'],
      ['fullScreen', 'codeView'],
    ];
    const editorOptions = {
      lang: lang.ko,
      plugins: {
        blockquote,
        align,
        font,
        fontSize,
        fontColor,
        hiliteColor,
        horizontalRule,
        list,
        table,
        formatBlock,
        lineHeight,
        template,
        paragraphStyle,
        textStyle,
        link,
        image,
        video,
      },
      width: width,
      height: height,
      buttonList: toolbar,
      formats: [
        'h1',
        'h2',
        'h3',
        {
          tag: 'p',
          name: '본문',
          command: 'replace',
          class: '',
        },
        {
          tag: 'div',
          name: '인용구',
          command: 'range',
          class: '__se__format__range__quote',
        },
      ],
      resizingBar: false,
      imageUploadUrl,
      icons: {
        undo: '<i class="editor undo">실행취소</i>',
        redo: '<i class="editor redo">다시실행</i>',
        bold: '<i class="editor bold">굵게</i>',
        underline: '<i class="editor underline">밑줄</i>',
        italic: '<i class="editor italic">기울이기</i>',
        strike: '<i class="editor strike">가운데선</i>',
        font_color: '<i class="editor font">글자색</i>',
        highlight_color: '<i class="editor highlighter">배경색</i>',
        align_left: '<i class="editor align-left">왼쪽 정렬</i>',
        align_center: '<i class="editor align-center">가운데 정렬</i>',
        align_right: '<i class="editor align-right">우측 정렬</i>',
        align_justify: '<i class="editor align-justify">양쪽 정렬</i>',

        list_bullets: '<i class="editor list-ul">목록</i>',
        list_number: '<i class="editor list-ol">숫자 목록</i>',
        table: '<i class="editor table">테이블</i>',
        link: '<i class="editor link">링크</i>',
        image: '<i class="editor image">사진</i>',
        video: '<i class="editor video">비디오</i>',
        expansion: '<i class="editor expand">확장</i>',
        code_view: '<i class="editor code">코드</i>',
      },
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref.current = suneditor.create(editorID, editorOptions as any);

    ref.current.onChange = function (content: string) {
      onChange(content);
    };

    return () => {
      ref.current.destroy();
    };
  }, [editorID, height, onChange, width, imageUploadUrl]);

  return (
    <div className={styles.editor}>
      <textarea id={editorID} defaultValue={value} />
    </div>
  );
};

export default SunEditor;