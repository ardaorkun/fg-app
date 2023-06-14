import Post from '../post/Post'
import styles from './posts.module.css'

const Posts = () => {

    //TEMP
    const posts = [
        {
            id: '1',
            author: '123',
            authorUsername: 'frezo',
            title: 'CS:GO güncelleme',
            content: 'CS:GO oyununa acilen güncelleme getirmeniz lazım. Fiyatlar çok arttı. Kasa düşürüp satmazsak yeni oyun alamayacağız. Lütfen yeni kasa getirin. Geçen sefer düşürememiştim.',
            game: 'CS:GO'
        },
        {
            id: '2',
            author: '432',
            authorUsername: 'dryzee',
            title: 'Rust gelin',
            content: 'Kimse benle Rust oynamıyor. Gökberk ve Orkun süreklü LoL denen illete giriyor. İyi Rust oynayan elemanlar arıyorum. Bu arada haftasonu sınavım var.',
            game: 'Rust'
        },
        {
            id: '3',
            author: '789',
            authorUsername: 'dreamyy',
            title: 'Stardew Valley dünyam silidi.',
            content: 'Oyunu kaydedip yatmıştım. Ertesi gün oyunu açmaya çalıştığımda saveimi göremedim. Yaklaşık 100 saatimi harcadığım dünya yok oldu. Yardım edeiblir misiniz?',
            game: 'Stardew Valley'
        }
    ]

    return (
        <div className={styles.posts}>
            {posts.map(post => (
                <Post post={post} key={post.id}/>
            ))}
        </div>
    ) 
}
 
export default Posts