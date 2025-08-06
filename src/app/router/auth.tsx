import { useStrings } from "@/localizations";
import {
  Box,
  Card,
  GoogleSignInButton,
  Page,
  PageContent,
  PageHeader,
  Text,
  type JSX,
} from "@/theme";

export function AuthScreen(): JSX.Element {
  const strings = useStrings();

  return (
    <Page fill>
      <PageContent fill>
        <PageHeader title={strings.auth.title} />
        <Box justify="center" align="center" fill>
          <Card
            height={{ min: "medium" }}
            width={{ min: "medium" }}
            pad="medium"
            align="center"
            gap="small"
          >
            <Text>{strings.auth.options}</Text>
            <Box justify="center" align="center" fill>
              <GoogleSignInButton />
            </Box>
          </Card>
        </Box>
      </PageContent>
    </Page>
  );
}
