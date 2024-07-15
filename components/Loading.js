import loading from '../styles/components/loading.module.scss';

export default function Loading() {
  return (
    <section className={loading.section}>
      <h2>HighLightor</h2>
      <div class={loading.loading}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </section>
  );
}
