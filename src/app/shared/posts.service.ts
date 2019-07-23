import { Injectable } from '@angular/core';
import {Post} from './post';
import {AngularFirestoreCollection, AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // : Post[] = new Array<Post>();
  postsCol: AngularFirestoreCollection<Post>;
  postsSabadoTematicoCol: AngularFirestoreCollection<Post>;
  msgDiretas: AngularFirestoreCollection<Post>;
  constructor(private afs: AngularFirestore) {
    // this.posts.push(new Post('post 1'), new Post('post 2'), new Post('post 3'));
    this.postsCol = afs.collection('posts');
    this.postsSabadoTematicoCol = afs.collection('posts', ref => ref.where('texto', '>',
      '#sabadotematico').where('texto', '<', '#sabadotematicoz'));
    this.msgDiretas = afs.collection('posts', ref => ref.where('paraUsuario', '<', 'z' )
      .where('paraUsuario', '>', '' ) );
  }

/*getPosts(): Post[] {
    return this.posts;
  }
  enviarPost(post: Post) {
    this.posts.push(post);
  }
*/
  getPosts(): Observable<Post[]> {
    return this.postsCol.valueChanges();
  }
  enviarPost(post: Post) {
    let usuario;
    const idx =  post.texto.lastIndexOf('@');
    if (idx !== -1) {
      usuario = post.texto.slice(idx + 1);
    } else {
      usuario = '';
    }
    console.log(usuario);
    this.postsCol.add({texto: post.texto, paraUsuario: usuario});
  }
  getPostsSabadoTematico(): Observable<Post[]> {
    return this.postsSabadoTematicoCol.valueChanges();
  }
  getMsgDiretas(): Observable<Post[]> {
    return this.msgDiretas.valueChanges();
  }
}
