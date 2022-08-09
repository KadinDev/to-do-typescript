import styles from './Task.module.css';

import { useState } from 'react';

import { Trash, Check } from 'phosphor-react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

interface TaskProps {
    content: string;
    onDeleteTask: ( task: string ) => void;
    onTaskChecked: () => void;
};

export function Task( { content, onDeleteTask, onTaskChecked } : TaskProps ){

    const [borderCheck, setBorderCheck] = useState(false);

    function handleCheckTask(){
        setBorderCheck(!borderCheck);
        onTaskChecked();
    };

    function handleDeleteTask(){
        onDeleteTask(content);
    };

    return (
        <div className={styles.container}>
            
            { !borderCheck ? (
                <input
                    onClick={handleCheckTask}
                    className={ styles.checkbox }
                    type="radio" 
                />
            ) : (
                <div className={styles.containerCheck}>
                    <Check
                        onClick={handleCheckTask}
                        width={14}
                        height={14}
                        color='#fff'
                    />
                </div>
            ) }
            

            { !borderCheck ? (
                <p className={styles.contentBorder} > {content} </p>
            ) : (
                <p className={styles.contentWithBorder}> {content} </p>
            ) }
            
            
            <button className={styles.buttonDelete}>
                <Trash
                    width={24}
                    height={24}
                    color='#808080'
                    onClick={handleDeleteTask}
                />
            </button>

        </div>
    )
}