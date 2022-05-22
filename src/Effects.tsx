import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string; payload: number }) {
    const [mess, setMess] = useState(-1);
    const callback = (payload: number) => {
        setMess(payload);
    };
    useEffect(() => {
        subscribe(props.sourceId, callback);
        return () => {
            unsubscribe(props.sourceId, callback);
            setMess(-1);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {mess}
        </div>
    );
}
