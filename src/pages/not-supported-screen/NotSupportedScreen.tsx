import "./NotSupportedScreen.scss";

export function NotSupportedScreen() {
  return (
    <div className="not-supported-screen">
      <div className="text-xl text-primary">
        I'm sorry Dude, but your screen size is not yet supported by this page :(
      </div>
      <div className="text-xs">Hint: pc, laptop, or desktop?</div>
    </div>
  );
}
