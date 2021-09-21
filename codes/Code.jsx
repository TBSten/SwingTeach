import {useEffect,useMemo} from "react" ;

import hljs from 'highlight.js/lib/core';
import java from 'highlight.js/lib/languages/java';
import 'highlight.js/styles/stackoverflow-light.css';

hljs.registerLanguage("java",java);

export default ({title,children})=>{
    const code = useMemo(()=>{
        return children ;
    },[children]) ;
    useEffect(() => {
        hljs.initHighlighting();
        hljs.initHighlighting.called = false;
    });
    return (
        <div className="code">
            <h6>{title}</h6>
            <pre>
                <code className="java">
                    {children}
                </code>
            </pre>
        </div>
    ) ;
} ;