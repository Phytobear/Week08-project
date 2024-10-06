import LinkButton from "@/components/LinkButton";

export default function ErrorPage() {
  return (
    <div>
      <h1>error adding review</h1>
      <p>
        there seems to be a problem submitting your review, we are sorry about
        that
      </p>
      <LinkButton href="/add-review">go back</LinkButton>
    </div>
  );
}
