import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!);

async function Quiz({ id }: { id: string }) {
  const quiz = await sql`
  SELECT * FROM quizzes WHERE quiz_id = ${id}`;

  return (
    <div>
      <h1>{quiz[0].quiz_title}</h1>
    </div>
  )
}

function QuizPage({ params }: { params: { id: string } }) {
  return (
    <section>
      <Quiz id={params.id}/>
    </section>
  );
}

export default QuizPage;
