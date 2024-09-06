import BtnMore from "./_components/btnMore/btnMore";
import CardNote from "./_components/cardNote/cardNote";

export default function Home() {
  return (
    <div className="flex">
      <CardNote />
      <BtnMore />
    </div>
  );
}
