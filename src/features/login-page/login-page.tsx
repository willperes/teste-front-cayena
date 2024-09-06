import styles from "./login-page.module.scss";

import { PageBox, PageHeader } from "@/components";
import { CardBox } from "@/components";
import { LoginPageForm } from "./components/login-page-form/login-page-form";

export function LoginPage() {
  return (
    <>
      <PageHeader />
      <PageBox>
        <div className={styles.container}>
          <CardBox className={styles.container__card}>
            <LoginPageForm />
          </CardBox>
        </div>
      </PageBox>
    </>
  );
}
