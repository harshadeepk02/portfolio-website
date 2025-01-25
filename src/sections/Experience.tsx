export const ExperienceSection = () => {
  return (
    <div id="experience" className="spacing flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold text-text">
        Experience
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center md:gap-5">
        
        <div className="flex flex-col w-full justify-start border border-gray-500 rounded-3xl bg-text/10 backdrop-blur m-5 p-5">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-heading">
              FactFlow
            </h2>
            <div className="text-xs text-text/50">
              Jan 2024 - May 2024
            </div>
          </div>
          <h3 className="text-md text-text/50 pt-0 pb-3">
            Fullstack Developer
          </h3>
          <p className="text-md"> 
            Created a product designed to provide research labs at UT Austin with
            an AI-powered query engine that only sources academic references and
            reduces hallucination. 
          </p>
          <div className="flex gap-3 pt-7 text-xs justify-center text-text/70 font-bold">
            <p className="py-1 px-2 border rounded-full"> Python </p>
            <p className="py-1 px-2 border rounded-full"> Flask </p>
            <p className="py-1 px-2 border rounded-full"> React </p>
            <p className="py-1 px-2 border rounded-full"> LlamaIndex </p>
          </div>
        </div>
      
        <div className="flex flex-col w-full justify-start border border-gray-500 rounded-3xl bg-text/10 backdrop-blur m-5 p-5">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-heading">
              FactFlow
            </h2>
            <div className="text-xs text-text/50">
              Jan 2024 - May 2024
            </div>
          </div>
          <h3 className="text-md text-text/50 pt-0 pb-3">
            Fullstack Developer
          </h3>
          <p className="text-md"> 
            Created a product designed to provide research labs at UT Austin with
            an AI-powered query engine that only sources academic references and
            reduces hallucination. Utilized the Tavily API to source academic references
            and GPT-4 to generate responses. Broke down LlamaIndex&apos;s RAG-pipeline to 
            provide referenced sources to users.
          </p>
          <div className="flex gap-3 pt-7 text-xs justify-center text-text/70 font-bold">
            <p className="py-1 px-2 border rounded-full"> Python </p>
            <p className="py-1 px-2 border rounded-full"> Flask </p>
            <p className="py-1 px-2 border rounded-full"> React </p>
            <p className="py-1 px-2 border rounded-full"> LlamaIndex </p>
          </div>
        </div>
        
        <div className="flex flex-col w-full justify-start border border-gray-500 rounded-3xl bg-text/10 backdrop-blur m-5 p-5">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-heading">
              FactFlow
            </h2>
            <div className="text-xs text-text/50">
              Jan 2024 - May 2024
            </div>
          </div>
          <h3 className="text-md text-text/50 pt-0 pb-3">
            Fullstack Developer
          </h3>
          <p className="text-md"> 
            Created a product designed to provide research labs at UT Austin with
            an AI-powered query engine that only sources academic references and
            reduces hallucination. Utilized the Tavily API to source academic references
            and GPT-4 to generate responses. Broke down LlamaIndex&apos;s RAG-pipeline to 
            provide referenced sources to users.
          </p>
          <div className="flex gap-3 pt-7 text-xs justify-center text-text/70 font-bold">
            <p className="py-1 px-2 border rounded-full"> Python </p>
            <p className="py-1 px-2 border rounded-full"> Flask </p>
            <p className="py-1 px-2 border rounded-full"> React </p>
            <p className="py-1 px-2 border rounded-full"> LlamaIndex </p>
          </div>
        </div>
      </div>
    </div>
  );
};
