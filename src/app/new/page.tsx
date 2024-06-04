export default function SnippetCreatePage() {
  return (
    <form>
      <h3 className='m-3 font-bold'>Create a Snippet</h3>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='title'>
            Title
          </label>
          <input
            name='title'
            className='w-full rounded border p-2'
            id='title'
          />
        </div>

        <div className='flex gap-4'>
          <label className='w-12' htmlFor='code'>
            Code
          </label>
          <textarea
            name='code'
            className='w-full rounded border p-2'
            id='code'
          />
        </div>

        <button type='submit' className='rounded bg-blue-200 p-2'>
          Create
        </button>
      </div>
    </form>
  );
}
