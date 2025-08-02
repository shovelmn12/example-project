import { useStrings } from "@/localizations";
import { Box, Card, Text, type JSX } from "@/theme";
import { CreateProfile, ProfilesCount, ProfilesTable } from "@/profiles";

export function ProfileScreen(): JSX.Element {
  const strings = useStrings();

  return (
    <Box justify="center" align="center" fill>
      <Card
        pad="medium"
        justify="center"
        align="center"
        gap="medium"
        width={{ min: "medium" }}
        height={{ min: "small" }}
        overflow="auto"
      >
        <CreateProfile />
        <Text size="xsmall">
          {strings.profiles.count}: <ProfilesCount />
        </Text>
        <ProfilesTable />
      </Card>
    </Box>
  );
}
