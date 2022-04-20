import WriteComment, {
    getComments,
    LoadComments,
} from './comment'

export default function Post({ post }) {
    const [comments, setComments] = useState([])
    return <>
        <WriteComment setComments={setComments} slug={post.slug} />
        <div className="mt-10 pt-10 w-full border-t dark:border-gray-500">
            <button
                onClick={() => getComments(post.slug, setComments)}
                className="w-[200px] appearance-none py-2 px-5 text-center rounded border hover:bg-gray-100 dark:hover:bg-[#28282B]   dark:border-gray-500"
            >
                Load Comments
            </button>
        </div>
        <LoadComments comments={comments} />
    </>
}