<style>
  :global(body) {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 5rem;
    height: 90vh;
    display: flex;
    background-color: azure;
  }
  .app {
    display: grid;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .box {
    margin: 0 auto;
  }
</style>

<script>
  import './main.css';
  import { timer } from './timer';
  import { interval } from 'rxjs';
  import { map, startWith } from 'rxjs/operators';

  const rxTimer = interval(1000).pipe(
    startWith(0),
    map(v => v * 2)
  );
</script>

<div class="app">
  <div class="box bg-green-300 px-5">
    <div>TS Timer {$timer}</div>
    <div>Rx Timer {$rxTimer}</div>
  </div>
</div>
