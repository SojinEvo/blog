import axios from './axios'



// 拿取issues
export const Issues = () => axios('https://api.github.com/repos/Jine-are/blog/issues')

// 获取标签
export const getTags = (text) => axios(`https://api.github.com/repos/Jine-are/blog/issues?labels=${text}`)


// markdown
export const markdown = (text) => axios("https://api.github.com/markdown", {
  text
}, "POST")


// 更新文章
export const UpdateData = ({number,title,body,labels}) => axios(`https://api.github.com/repos/Jine-are/blog/issues/${number}` ,{title,body,labels}, 'PATCH')

// 新增文章
export const AddDate = ({title,body}) => axios(`https://api.github.com/repos/Jine-are/blog/issues`,{title,body},'POST')


// 获取评论
export const getcommit = (number) => axios(`https://api.github.com/repos/Jine-are/blog/issues/${number}/comments`)

// 删除文章
export const dele = (name) => axios(`https://api.github.com/repos/repos/Jine-are/blog/labels/${name}`,'DELETE')

// 获取issues下的文章具体内容
export const getContent = (number) => axios(`https://api.github.com/repos/repos/Jine-are/blog/issues/${number}`)