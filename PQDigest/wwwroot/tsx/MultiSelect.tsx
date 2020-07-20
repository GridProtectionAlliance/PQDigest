//******************************************************************************************************
//  MultiSelect.tsx - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  07/17/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';

const MultiSelect = (props: { Options: { Value: number, Text: string, Selected: boolean }[], OnChange: (evt: any, Options: { Value: number, Text: string, Selected: boolean }[]) => void }) => {
    const [show, setShow] = React.useState<boolean>(false);
    const multiSelect = React.useRef(null);

    function HandleShow(evt) {
        if (!multiSelect.current.contains(evt.target))
            setShow(false);
        else
            setShow(true);

    }

    React.useEffect(() => {
        return function () {
        }
    }, [props.Options]);

    React.useEffect(() => {
        document.addEventListener('mousedown', HandleShow, false);
        return function () {
            document.removeEventListener('mousedown', HandleShow, false);
        }
    }, []);


    return (
        <div ref={multiSelect} style={{ position: 'relative', display: 'inline-block' }}>
            <button style={{ border: '1px solid #ced4da', padding: '.375rem .75rem', fontSize: '1rem', borderRadius: '.25rem' }} className="btn form-control dropdown-toggle" onClick={HandleShow}>{props.Options.filter(x => x.Selected).length != props.Options.length ? props.Options.filter(x => x.Selected).length : 'All '} Selected</button>
            <div style={{ maxHeight: window.innerHeight * .75, overflowY: 'auto', padding: '10 5', display: show ? 'block' : 'none', position: 'absolute', backgroundColor: '#fff', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 1 }}>
                <table className='table' style={{ margin: 0 }}>
                    <tbody>
                        <tr onClick={(evt) => {
                            evt.preventDefault()
                            props.OnChange(evt, props.Options.filter(x => x.Selected == (props.Options.filter(x => x.Selected).length == props.Options.length)));
                        }}><td><input type="checkbox" checked={props.Options.filter(x => x.Selected).length == props.Options.length} onChange={() => null} /></td><td>All</td></tr>
                        {props.Options.map((f, i) => <tr key={i} onClick={(evt) => props.OnChange(evt, [f])}><td><input type="checkbox" checked={f.Selected} onChange={() => null} /></td><td>{f.Text}</td></tr>)}
                    </tbody>

                </table>
            </div>
        </div>
    );
}
export default MultiSelect;