import styles from './App.module.css';
import './global.css';

import { Header } from './Header';
import { PageTasks } from './PageTasks';

export function App(){

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <main>

          <PageTasks/>

        </main>
        
      </div>

    </div>
  );

}


export default App;