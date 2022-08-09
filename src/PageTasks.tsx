import styles from './PageTasks.module.css';

import { InvalidEvent, FormEvent, useState, ChangeEvent } from 'react';

import { PlusCircle } from 'phosphor-react';

import clipboard from '../src/assets/clipboard.svg';

import { Task } from '../src/Task';

export function PageTasks(){

    const [newTask, setNewTask] = useState('');
    const [taskChecked, setTaskChecked] = useState(0);

    const [myTasks, setMyTasks] = useState([
        'Praticar SQL intensamente',
        'Terminar aquele projeto com Firebase',
        'Estudar mais e mais React JS',
    ]);

    function handleTaskChecked(){
        setTaskChecked((state) => {
            return state + 1
        });
    };

    function handleCreateNewTask( event: FormEvent ){
        event.preventDefault();
        setMyTasks( [ ...myTasks, newTask ] );
        setNewTask('');
    };

    function handleNewTask( event: ChangeEvent<HTMLInputElement> ){
        setNewTask(event.target.value);

        // volta para a strng vazia, para nao dar erro apos escrever algo para enviar
        event.target.setCustomValidity('');
    };

    function handleNewTaskInvalid( event: InvalidEvent<HTMLInputElement> ){
        event.target.setCustomValidity('Escreva sua nova task');
    };

    function handleDeleteTask( taskDelete : string ){
        const taskWithoutDeleteOne = myTasks.filter(task => {
            return task != taskDelete;
        });
        setMyTasks(taskWithoutDeleteOne);
    };

    const isNewTaskEmpty = newTask.length < 3;

    return (
        <div>

            <form
                onSubmit={handleCreateNewTask}
                className={styles.form}
            >

                <input
                placeholder='Adicione uma nova tarefa'
                name='task'

                value={newTask}
                onChange={handleNewTask}

                required
                onInvalid={handleNewTaskInvalid}
                />

                <button 
                type='submit'
                disabled={isNewTaskEmpty}
                >
                
                Criar 
                <PlusCircle
                    size={16}
                    color='#F2F2F2'
                />
                </button>

            </form>


            <main>
                <header>
                    <div className={styles.totalTasks}>
                        <strong>Tarefas criadas</strong>
                        <span> { myTasks.length } </span>
                    </div>

                    <div className={styles.successTasks}>
                        <strong>Finalizadas</strong>
                        <span> {taskChecked} de { myTasks.length } </span>
                    </div>
                </header>
            </main>

            <section className={styles.containerTasks}>
                
                { myTasks.length === 0 && (
                    <div className={styles.noTasks}>
                        <img src={clipboard} />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                )}

                <div className={styles.taskContainer}>
                    { myTasks.map(task => {
                        return (
                            <Task
                                key={task}
                                content={task}
                                onDeleteTask={handleDeleteTask}
                                onTaskChecked={handleTaskChecked}
                            />
                        )
                    }) }
                </div>

            </section>


        </div>
    )
}