CREATE TABLE IF NOT EXISTS member (
    user_id bigserial primary key,
    username text,
    user_level int,
    points_sum int
);
