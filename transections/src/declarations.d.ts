declare module 'main/mittEvent' {
  import mitt from 'mitt';

  type Events = {
  [key: string]: any;
};

  const mittEvent: mitt.Emitter<Events>;
  export { mittEvent };
}