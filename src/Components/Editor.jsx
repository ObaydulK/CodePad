import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2' 
import FontAwesome from 'react-fontawesome';
import { FaCompressAlt, FaExpandAlt } from 'react-icons/fa';

export default function Editor(props) {
    const { language, displayName, value, onChange } = props
    const [open, setOpen] = useState(true);

     


    function handleChange(editor, data, value) {
        onChange(value)
    }
    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className=" flex justify-between text-white bg-slate-500 p-2 rounded">
                {displayName}
                <button type='button' className=' ml-5 bg-none border-none text-white cursor-pointer ' onClick={() => setOpen(prevOpen => !prevOpen)} className=' rounded bg-white text-black px-2 flex-grow-0'>
                    <FontAwesome icon={open ? FaCompressAlt : FaExpandAlt} ></FontAwesome>
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-wrapper'
                options={{
                    lineWrapping: true, lint: true, mode: language, theme: 'material', lineNumbers: true,
                }}
            />
        </div>
    );
};
