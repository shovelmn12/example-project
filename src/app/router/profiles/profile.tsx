import { ProfileNameComponent } from "@/profiles";
import { Box, Card, Text, type JSX } from "@/theme";

export function ProfileScreen(): JSX.Element {
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
        <Text>
          <ProfileNameComponent />
        </Text>
      </Card>
    </Box>
  );
}
