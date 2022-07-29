import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Container, Wrapper } from '@/components/Layout';
import { LoadingDots } from '@/components/LoadingDots';
import { Text, TextLink } from '@/components/Text';
import { fetcher } from '@/lib/fetch';
import { usePostPages } from '@/lib/post';
import { useCurrentUser } from '@/lib/user';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import styles from './Poster.module.css';

const PosterInner = ({ user }) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = usePostPages();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        await fetcher('/api/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: titleRef.current.value, content: contentRef.current.value }),
        });
        toast.success('You have posted successfully');
        titleRef.current.value = '';
        contentRef.current.value = '';
        // refresh post lists
        mutate();
      } catch (e) {
        toast.error(e.message);
      } finally {
        setIsLoading(false);
      }
    },
    [mutate]
  );

  return (
    <form onSubmit={onSubmit}>
      <Container className={styles.poster}>
        <Avatar size={40} username={user.username} url={user.profilePicture} />
        <Container>
          <Input
            ref={titleRef}
            className={styles.input}
            placeholder="title"
            ariaLabel="title"
          />
        </Container>
        <Container>
          <Input
            ref={contentRef}
            className={styles.input}
            placeholder="content"
            ariaLabel="content"
          />
        </Container>
        <Button type="success" loading={isLoading}>
          Post
        </Button>
      </Container>
    </form >
  );
};

const Poster = () => {
  const { data, error } = useCurrentUser();
  const loading = !data && !error;

  return (
    data?.user && (
      <Wrapper>
        <div className={styles.root}>
          {loading ? (
            <LoadingDots>Loading</LoadingDots>
          ) :
            (<PosterInner user={data.user} />)
          }
        </div>
      </Wrapper
      >
    )
  )
}

export default Poster;
